import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Continuous vertical line running through the center */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  icon?: string;
  date: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  side?: string;
}

export function TimelineItem({
  icon,
  date,
  title,
  subtitle,
  children,
  side = "left",
}: TimelineItemProps) {
  return (
    <div className="flex items-start mb-12 relative">
      {side === "right" ? (
        <>
          {/* Left side - Date */}
          <div className="w-1/2 pr-12 text-right flex items-start justify-end pt-2">
            <span className="font-noto-bold text-gray-700 text-sm">{date}</span>
          </div>

          {/* Center - Icon */}
          <div className="flex flex-col items-center shrink-0 relative z-10">
            {icon && (
              <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            )}
            {!icon && (
              <div className="w-12 h-12 rounded-full bg-gray-300 border-4 border-gray-200" />
            )}
          </div>

          {/* Right side - Content */}
          <div className="w-1/2 pl-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-noto-bold mb-1 text-gray-900">
                {title}
              </h3>
              <p className="font-noto-light text-gray-600 mb-4 text-left">
                {subtitle}
              </p>
              <div className="font-noto-light text-gray-700">{children}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Left side - Content */}
          <div className="w-1/2 pr-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-noto-bold mb-1 text-gray-900">
                {title}
              </h3>
              <p className="font-noto-light text-gray-600 mb-4 text-left">
                {subtitle}
              </p>
              <div className="font-noto-light text-gray-700">{children}</div>
            </div>
          </div>

          {/* Center - Icon */}
          <div className="flex flex-col items-center shrink-0 relative z-10">
            {icon && (
              <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            )}
            {!icon && (
              <div className="w-12 h-12 rounded-full bg-gray-300 border-4 border-gray-200" />
            )}
          </div>

          {/* Right side - Date */}
          <div className="w-1/2 pl-12 flex items-start pt-2">
            <span className="font-noto-bold text-gray-700 text-sm">{date}</span>
          </div>
        </>
      )}
    </div>
  );
}

export function TimelineContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
