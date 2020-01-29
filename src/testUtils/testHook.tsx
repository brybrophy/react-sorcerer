import React from 'react';
import { shallow } from 'enzyme';

export default function testHook<T>(runHook: any): T {
  function HookWrapper() {
    const output = runHook();

    // @ts-ignore
    return <span output={output} />;
  }

  const wrapper = shallow(<HookWrapper />);

  // @ts-ignore
  return wrapper.find('span').props().output;
}
