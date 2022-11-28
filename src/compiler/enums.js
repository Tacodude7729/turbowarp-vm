/**
 * @fileoverview Common enums shared amongst parts of the compiler.
 */


/**
 * Enum for the type of the value that is returned by reporter blocks and stored in constants.
 * @readonly
 * @enum {number}
 */
const ValueType = {
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    UNKNOWN: 4,
    NUMBER_OR_NAN: 5,
}

/**
 * Enum for the opcodes of the stackable blocks used in the IR AST.
 * @readonly
 * @enum {string}
 */
const BlockOpcode = {
    NOP: "noop",

    CONTROL_IF_ELSE: "control.if",
    CONTROL_CLONE_CREATE: "control.createClone",
    CONTROL_CLONE_DELETE: "control.deleteClone",
    CONTROL_WHILE: "control.while",
    CONTROL_FOR: "control.for",
    CONTROL_REPEAT: "control.repeat",
    CONTROL_STOP_ALL: "control.stopAll",
    CONTROL_STOP_OTHERS: "control.stopOthers",
    CONTROL_STOP_SCRIPT: "control.stopScript",
    CONTROL_WAIT: "control.wait",
    CONTROL_WAIT_UNTIL: "control.waitUntil",
    CONTROL_WHILE: "control.while",

    LIST_ADD: "list.add",
    LIST_INSERT: "list.instert",
    LIST_REPLACE: "list.replace",
    LIST_DELETE_ALL: "list.deleteAll",
    LIST_DELETE: "list.delete",
    LIST_SHOW: "list.show",
    LIST_HIDE: "list.hide",

    VAR_SET: "var.set",
    VAR_SHOW: "var.show",
    VAR_HIDE: "var.hide",

    EVENT_BROADCAST: "event.broadcast",
    EVENT_BROADCAST_AND_WAIT: "event.broadcastAndWait",

    LOOKS_EFFECT_SET: "looks.setEffect",
    LOOKS_EFFECT_CHANGE: "looks.changeEffect",
    LOOKS_EFFECT_CLEAR: "looks.clearEffects",
    LOOKS_SIZE_CHANGE: "looks.changeSize",
    LOOKS_SIZE_SET: "looks.setSize",
    LOOKS_LAYER_FORWARD: "looks.forwardLayers",
    LOOKS_LAYER_BACKWARD: "looks.backwardLayers",
    LOOKS_LAYER_FRONT: "looks.goToFront",
    LOOKS_LAYER_BACK: "looks.goToBack",
    LOOKS_HIDE: "looks.hide",
    LOOKS_SHOW: "looks.show",
    LOOKS_BACKDROP_NEXT: "looks.nextBackdrop",
    LOOKS_BACKDROP_SET: "looks.switchBackdrop",
    LOOKS_COSTUME_NEXT: "looks.nextCostume",
    LOOKS_COSTUME_SET: "looks.switchCostume",

    MOTION_X_SET: "motion.setX",
    MOTION_X_CHANGE: "motion.changeX",
    MOTION_Y_SET: "motion.setY",
    MOTION_Y_CHANGE: "motion.changeY",
    MOTION_XY_SET: "motion.setXY",
    MOTION_IF_ON_EDGE_BOUNCE: "motion.ifOnEdgeBounce",
    MOTION_STEP: "motion.step",
    MOTION_ROTATION_STYLE_SET: "motion.setRotationStyle",
    MOTION_DIRECTION_SET: "motion.setDirection",

    PEN_UP: "pen.up",
    PEN_DOWN: "pen.down",
    PEN_CLEAR: "pen.clear",
    PEN_COLOR_PARAM_SET: "pen.setParam",
    PEN_COLOR_PARAM_CHANGE: "pen.changeParam",
    PEN_COLOR_HUE_CHANGE_LEGASY: "pen.legacyChangeHue",
    PEN_COLOR_HUE_SET_LEGASY: "pen_setPenHueToNumber",
    PEN_COLOR_SHADE_CHANGE_LEGASY: "pen.legacyChangeShade",
    PEN_COLOR_SHADE_SET_LEGASY: "pen.legacySetShade",
    PEN_COLOR_SET: "pen.setColor",
    PEN_SIZE_SET: "pen.setSize",
    PEN_SIZE_CHANGE: "pen.changeSize",
    PEN_STAMP: "pen.stamp",

    SENSING_TIMER_RESET: "timer.reset",

    PROCEDURE_CALL: "procedures.call",

    TW_ADDON_CALL: "addons.call",
    TW_DEBUGGER: "tw.debugger",
    TW_VISUAL_REPORT: "visualReport",
    TW_COMPATIBILITY_LAYER: "compat"
};

/**
 * Enum for the opcodes of the reporter blocks used in the IR AST.
 * @readonly
 * @enum {string}
 */
const ReporterOpcode = {
    CONSTANT: "constant",

    LOOKS_BACKDROP_NUMBER: "looks.backdropNumber",
    LOOKS_BACKDROP_NAME: "looks.backdropName",
    LOOKS_COSTUME_NUMBER: "looks.costumeNumber",
    LOOKS_COSTUME_NAME: "looks.costumeName",
    LOOKS_SIZE_GET: "looks.size",

    VAR_GET: "var.get",

    LIST_GET: "list.get",
    LIST_LENGTH: "list.length",
    LIST_CONTAINS: "list.contains",
    LIST_INDEX_OF: "list.indexOf",
    LIST_CONTENTS: "list.contents",

    MOTION_X_GET: "motion.x",
    MOTION_Y_GET: "motion.y",
    MOTION_DIRECTION_GET: "motion.direction",

    OP_ADD: "op.add",
    OP_AND: "op.and",
    OP_CONTAINS: "op.contains",
    OP_DIVIDE: "op.divide",
    OP_EQUALS: "op.equals",
    OP_GREATER: "op.greater",
    OP_LESS: "op.less",
    OP_JOIN: "op.join",
    OP_LENGTH: "op.length",
    OP_LETTER_OF: "op.letterOf",
    OP_ABS: "op.abs",
    OP_FLOOR: "op.floor",
    OP_CEILING: "op.ceiling",
    OP_SQRT: "op.sqrt",
    OP_SIN: "op.sin",
    OP_COS: "op.cos",
    OP_TAN: "op.tan",
    OP_ASIN: "op.asin",
    OP_ACOS: "op.acos",
    OP_ATAN: "op.atan",
    OP_LOG_E: "op.ln",
    OP_LOG_10: "op.log",
    OP_POW_E: "op.e^",
    OP_POW_10: "op.10^",
    OP_MOD: "op.mod",
    OP_MULTIPLY: "op.multiply",
    OP_NOT: "op.not",
    OP_OR: "op.or",
    OP_RANDOM: "op.random",
    OP_ROUND: "op.round",
    OP_SUBTRACT: "op.subtract",

    SENSING_ANSWER: "sensing.answer",
    SENSING_COLOR_TOUCHING_COLOR: "sensing.colorTouchingColor",
    SENSING_TIME_YEAR: "sensing.year",
    SENSING_TIME_MONTH: "sensing.month",
    SENSING_TIME_DATE: "sensing.date",
    SENSING_TIME_WEEKDAY: "sensing.dayofweek",
    SENSING_TIME_HOUR: "sensing.hour",
    SENSING_TIME_MINUTE: "sensing.minute",
    SENSING_TIME_SECOND: "sensing.second",
    SENSING_TIME_DAYS_SINCE_2000: "sensing.daysSince2000",
    SENSING_DISTANCE: "sensing.distance",
    SENSING_KEY_DOWN: "keyboard.pressed",
    SENSING_MOUSE_DOWN: "mouse.down",
    SENSING_MOUSE_X: "mouse.x",
    SENSING_MOUSE_Y: "mosue.y",
    SENSING_OF: "sensing.of",
    SENSING_TIMER_GET: "timer.get",
    SENSING_TOUCHING_COLOR: "sensing.touchingColor",
    SENSING_TOUCHING_OBJECT: "sensing.touching",
    SENSING_USERNAME: "sensing.username",

    PROCEDURE_ARG_ROUND: "args.stringNumber",
    PROCEDURE_ARG_BOOLEAN: "args.boolean",

    TW_KEY_LAST_PRESSED: "tw.lastKeyPressed",
    TW_COMPATIBILITY_LAYER: "compat"
};

module.exports = {
    BlockOpcode,
    ReporterOpcode,
    ValueType,
};