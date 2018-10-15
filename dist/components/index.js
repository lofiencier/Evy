import React from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bind = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var cx = bind.bind(undefined);

var Iiu = function (_React$Component) {
  inherits(Iiu, _React$Component);

  function Iiu(props) {
    classCallCheck(this, Iiu);
    return possibleConstructorReturn(this, (Iiu.__proto__ || Object.getPrototypeOf(Iiu)).call(this));
  }

  createClass(Iiu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: cx('messeage') },
        React.createElement(
          'p',
          null,
          'title'
        ),
        React.createElement(
          'span',
          null,
          '22222'
        )
      );
    }
  }]);
  return Iiu;
}(React.Component);

Iiu.defaultProps = {
  whatever: 'whatever'
};
Iiu.__docgenInfo = {
  'description': '',
  'methods': [],
  'displayName': 'Iiu',
  'props': {
    'whatever': {
      'defaultValue': {
        'value': '\'whatever\'',
        'computed': false
      },
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'jsjsjsjsajdoiajsoj'
    },
    'motherFucker': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'finalllllllly \u554A\uFF0Cyou mother fucker'
    }
  }
};

export { Iiu };
//# sourceMappingURL=index.js.map
