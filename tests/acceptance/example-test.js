import { test } from 'qunit';
import moduleForAcceptance from 'ember-responsive-acceptance-test-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | example');

test('visiting /example as mobile', function(assert) {
  setBreakpoint('mobile');
  visit('/example');

  andThen(() => {
    assert.equal(currentURL(), '/example');
    assert.equal(find('.breakpoint-text').text().trim(), 'Media breakpoint is mobile.');
  });
});

test('visiting /example as desktop', function(assert) {
  setBreakpoint('desktop');
  visit('/example');

  andThen(() => {
    assert.equal(currentURL(), '/example');
    assert.equal(find('.breakpoint-text').text().trim(), 'Media breakpoint is desktop.');
  });
});
