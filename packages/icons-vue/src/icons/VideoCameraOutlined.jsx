// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';

export default {
  name: 'IconVideoCameraOutlined',
  displayName: 'VideoCameraOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VideoCameraOutlinedSvg } },
      children,
    ),
};