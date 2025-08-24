import React, { useState, useCallback, useMemo } from "react";

// 使用高级TypeScript类型
interface CardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
}

// 泛型约束和条件类型
type CardProps<T extends CardData> = {
  data: T;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  variant?: "default" | "highlighted" | "minimal";
};

// 使用映射类型创建只读版本
type ReadonlyCardData = Readonly<CardData>;

// 提取特定属性类型
type CardTitle = CardData["title"];
type CardTags = CardData["tags"];

export const ModernCard = <T extends CardData>({
  data,
  onEdit,
  onDelete,
  variant = "default",
}: CardProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 使用useCallback优化性能
  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleEdit = useCallback(() => {
    onEdit?.(data.id);
  }, [onEdit, data.id]);

  const handleDelete = useCallback(() => {
    onDelete?.(data.id);
  }, [onDelete, data.id]);

  // 使用useMemo优化计算属性
  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(data.createdAt);
  }, [data.createdAt]);

  const cardClasses = useMemo(() => {
    const baseClasses =
      "rounded-lg border transition-all duration-300 ease-in-out";

    switch (variant) {
      case "highlighted":
        return `${baseClasses} border-blue-200 bg-blue-50 shadow-lg hover:shadow-xl`;
      case "minimal":
        return `${baseClasses} border-gray-100 bg-white shadow-sm`;
      default:
        return `${baseClasses} border-gray-200 bg-white shadow-md hover:shadow-lg`;
    }
  }, [variant]);

  const tagClasses = useMemo(() => {
    return "inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 mr-2 mb-2";
  }, []);

  return (
    <div
      className={`${cardClasses} ${isHovered ? "scale-105" : "scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* 头部区域 */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {data.title}
          </h3>
          <div className="flex space-x-2">
            {onEdit && (
              <button
                onClick={handleEdit}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                aria-label="编辑"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            )}
            {onDelete && (
              <button
                onClick={handleDelete}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                aria-label="删除"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* 描述区域 */}
        <p
          className={`text-gray-600 mb-4 transition-all duration-300 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {data.description}
        </p>

        {/* 标签区域 */}
        {data.tags.length > 0 && (
          <div className="mb-4">
            {data.tags.map((tag, index) => (
              <span key={`${tag}-${index}`} className={tagClasses}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 底部区域 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          {data.description.length > 100 && (
            <button
              onClick={handleToggleExpand}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              {isExpanded ? "收起" : "展开"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 默认导出
export default ModernCard;
