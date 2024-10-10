export const getPlanColors = (name: string) => {
  const planColorPrimary = `var(--${name.toLowerCase()}-plan-primary)`;
  const planColorSecondary = `var(--${name.toLowerCase()}-plan-secondary)`;
  const planColorDark = `var(--${name.toLowerCase()}-plan-dark)`;

  return { planColorPrimary, planColorSecondary, planColorDark };
};
