const VARIANTS = {
  neutral: {
    bg: 'bg-gray-100 dark:bg-gray-800',
    border: 'border-gray-700 dark:border-gray-500',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-950',
    border: 'border-blue-400 dark:border-blue-600',
  },
  yellow: {
    bg: 'bg-amber-100 dark:bg-amber-950',
    border: 'border-amber-500 dark:border-amber-600',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-950',
    border: 'border-purple-400 dark:border-purple-600',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-950',
    border: 'border-green-500 dark:border-green-600',
  },
  white: {
    bg: 'bg-white dark:bg-gray-900',
    border: 'border-gray-400 dark:border-gray-600',
  },
  splitter: {
    bg: 'bg-red-100 dark:bg-red-950',
    border: 'border-red-400 dark:border-red-600',
  },
};

export const RegionBox = ({
  title,
  code,
  variant = 'neutral',
  className = '',
  highlight = false,
  children,
}) => {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  const ring = highlight ? 'ring-2 ring-amber-500 dark:ring-amber-400' : '';

  return (
    <div
      className={`flex flex-col gap-0.5 rounded border p-2 text-left text-xs leading-snug ${v.bg} ${v.border} ${ring} ${className}`}
    >
      {title ? <span className="font-semibold text-gray-900 dark:text-gray-100">{title}</span> : null}
      {code ? (
        <span className="font-mono text-[10px] text-gray-600 dark:text-gray-400">{code}</span>
      ) : null}
      {children}
    </div>
  );
};

export const DiagramFrame = ({ title, subtitle, children }) => (
  <div className="my-4 overflow-x-auto rounded-lg border border-gray-200 p-3 dark:border-gray-700">
    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">{title}</div>
    {subtitle ? (
      <div className="mb-3 font-mono text-[10px] text-gray-500 dark:text-gray-400">{subtitle}</div>
    ) : null}
    {children}
  </div>
);
