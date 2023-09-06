console.log("1. 첫 번째 줄\n두 번째 줄");
console.log(`2. 첫 번째 줄
두 번째 줄`);

// 템플릿의 중첩 사용
const class1 = `header ${isLargeScreen() ? '' :
 `icon-${item.isCollapsed ? 'expander' :
  'collapser'}` }`;