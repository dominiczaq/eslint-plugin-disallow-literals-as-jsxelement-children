/**
 * @fileoverview Disallow string literals as direct JSXElement children
 * @author Grzegorz Dominiczak
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/eslint-plugin-disallow-literals-as-direct-jsxelement-children'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run(
  'eslint-plugin-disallow-literals-as-direct-jsxelement-children',
  rule,
  {
    valid: ["<MyComponent>{trans('foo')}</MyComponent>"],

    invalid: [
      {
        code: '<MyComponent>Foo</MyComponent>',
        errors: [
          {
            message:
              'Unexpected literal used as direct child of JSXElement - Foo',
            type: 'Literal'
          }
        ]
      }
    ]
  }
);
