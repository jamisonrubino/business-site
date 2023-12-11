import * as React from 'react';
import { Html } from '@react-email/components';

export function Email(props) {
  // const { url } = props;
  const { message } = props;

  return (
    <Html lang="en">
      <p>{message}</p>
    </Html>
  );
}