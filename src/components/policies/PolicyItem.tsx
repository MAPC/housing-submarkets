import React from 'react';

interface PolicyItemProps {
  title: string,
  body: string,
}

const PolicyItem: React.FC<PolicyItemProps> = ({ title, body }) => (
  <div>
    <p><span>{title}: </span>{body}</p>
  </div>
);

export default PolicyItem;
