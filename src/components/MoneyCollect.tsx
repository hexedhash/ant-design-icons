import * as React from "react";

const MoneyCollect: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M256 184v560.4l256 93.1 256-93.1V184H256zm411.6 139.8L564 515.4h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V704c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.5h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57l-104-191.5c-2.1-3.9-.7-8.7 3.2-10.8 1.2-.6 2.5-1 3.8-1h55.7c3 0 5.8 1.7 7.1 4.4L511 485.2h3.2l84.7-168.8c1.4-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8 8 .1 1.3-.3 2.6-.9 3.8z"
      fill="currentColor"
    />
    <path d="M911.5 700.7c-1.5-4.2-6.1-6.3-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1z" />
    <path d="M660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8c-1.4-2.7-4.1-4.4-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
  </svg>
);

MoneyCollect.displayName = "MoneyCollect";

export default MoneyCollect;