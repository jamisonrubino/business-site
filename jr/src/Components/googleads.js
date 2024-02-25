import React from 'react';

export default class GoogleAds extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        // google.com, pub-7683046894176717, DIRECT, f08c47fec0942fa0

        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-7683046894176717'
          data-ad-slot='f08c47fec0942fa0'
          data-ad-format='auto' />
    );
  }
}