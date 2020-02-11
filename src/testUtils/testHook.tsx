import React from 'react';
import { shallow } from 'enzyme';

export default function testHook<T>(runHook: any): T {
  function HookWrapper() {
    const output = runHook();

    return <span data-output={output} />;
  }

  const wrapper = shallow(<HookWrapper />);

  return wrapper.find('span').prop('data-output');
}
