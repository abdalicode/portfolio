import { cn } from '.';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('ignores falsy values', () => {
    const result = cn('class1', false && 'class2', null, undefined, 0, '');
    expect(result).toBe('class1');
  });

  it('merges conditional class names correctly', () => {
    const condition = true;
    const result = cn('class1', condition && 'class2');
    expect(result).toBe('class1 class2');
  });

  it('merges class names with Tailwind utilities correctly', () => {
    const result = cn('bg-red-500', 'bg-blue-500');
    expect(result).toBe('bg-blue-500');
  });
});
