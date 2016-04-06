import test from 'ava';
import postcss from 'postcss';
import fn from './';

test('long hand for margin', t => {
    var x = postcss().use(fn({})).process('margin:0px;', {}).css;
    t.is(x.indexOf('right'), 36);
});
