const ScratchExtensions = require('../../src/extension-support/tw-scratchx-compatibility-layer');
const {test} = require('tap');

test('register', t => {
    t.type(ScratchExtensions.register, 'function');
    t.end();
});

test('convert extension', t => {
    let stepsMoved = 0;
    const moveSteps = n => {
        stepsMoved += n;
    };

    let doNothingCalled = false;
    const doNothing = () => {
        doNothingCalled = true;
    };

    const multiplyAndAppend = (a, b, c) => `${a * b}${c}`;

    const touching = sprite => sprite === 'Sprite9';

    const converted = ScratchExtensions.convert(
        'My Extension',
        {
            blocks: [
                ['', 'move %n steps', 'moveSteps', 50],
                [' ', 'do nothing', 'doNothing', 100, 200],
                ['r', 'multiply %n by %n and append %s', 'multiplyAndAppend'],
                ['b', 'touching %s', 'touching', 'Sprite1']
            ]
        },
        {
            moveSteps,
            doNothing,
            multiplyAndAppend,
            touching
        }
    );

    const info = converted.getInfo();
    t.equal(info.id, 'scratchxmyextension');

    t.same(info.blocks, [
        {
            opcode: 'moveSteps',
            text: 'move [0] steps',
            blockType: 'command',
            arguments: [
                {
                    type: 'number',
                    defaultValue: 50
                }
            ]
        },
        {
            opcode: 'doNothing',
            text: 'do nothing',
            blockType: 'command',
            arguments: []
        },
        {
            opcode: 'multiplyAndAppend',
            text: 'multiply [0] by [1] and append [2]',
            blockType: 'reporter',
            arguments: [
                {
                    type: 'number'
                },
                {
                    type: 'number'
                },
                {
                    type: 'string'
                }
            ]
        },
        {
            opcode: 'touching',
            text: 'touching [0]',
            blockType: 'Boolean',
            arguments: [
                {
                    type: 'string',
                    defaultValue: 'Sprite1'
                }
            ]
        }
    ]);

    // Now let's make sure that the converter has properly wrapped our functions.
    t.equal(stepsMoved, 0);
    t.equal(converted.moveSteps({
        0: 30
    }), undefined);
    t.equal(stepsMoved, 30);

    t.equal(doNothingCalled, false);
    t.equal(converted.doNothing({}), undefined);
    t.equal(doNothingCalled, true);

    t.equal(converted.multiplyAndAppend({
        0: 31,
        1: 7,
        2: 'Cat'
    }), '217Cat');

    t.equal(converted.touching({
        0: 'Sprite1'
    }), false);
    t.equal(converted.touching({
        0: 'Sprite9'
    }), true);

    t.end();
});
