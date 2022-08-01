import React from "react";

const CustomBadge = (props: { label: String }) => {
  const { label } = props;
  return (
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
        {/* Brand new way */}
        {label}
      </p>
    </div>
  );
};

export default CustomBadge;
