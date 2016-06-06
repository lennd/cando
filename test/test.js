/*eslint-env mocha, chai */
const can = require('../');
const chai = require('chai');

const expect = chai.expect;
let mocks;

describe('Can', () => {
  beforeEach(() => {
    mocks = {
      role: 'sponsors',
      roles: {
        sponsors: {
          permissions: [
            'test_permission'
          ]
        }
      }
    };
  });

  it('takes the role and the list of roles and returns an object with `do`', () => {
    expect(can(mocks.role, mocks.roles).do).to.be.a('function');
  });

  describe('Do', () => {
    it('takes a permission and returns if that user has it or not', () => {
      expect(can(mocks.role, mocks.roles).do('test_permission')).to.equal(true);
      expect(can(mocks.role, mocks.roles).do('other_permission')).to.equal(false);
    });

    it('returns false if the passed role does not exist', () => {
      expect(can('other role', mocks.roles).do('test_permission')).to.equal(false);
    });
  });
});
