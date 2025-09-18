// components/budget/BudgetButton.tsx
'use client';
import React from 'react';
import { FileText } from 'lucide-react';
import { useBudget } from '@/lib/contexts/BudgetContext';

interface BudgetButtonProps {
  part?: any;
  variant?: 'default' | 'icon' | 'compact';
  className?: string;
}

export function BudgetButton({ part, variant = 'default', className = '' }: BudgetButtonProps) {
  const { addItem, toggleBudget, state } = useBudget();
  const { budget } = state;
  const budgetItemsCount = budget?.totalItems || 0;

  const handleAddToBudget = () => {
    if (part) {
      addItem(part);
    } else {
      toggleBudget();
    }
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleAddToBudget}
        className={`relative flex items-center justify-center p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors ${className}`}
        aria-label="Presupuesto"
      >
        <FileText className="w-5 h-5" />
        {budgetItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {budgetItemsCount}
          </span>
        )}
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        onClick={handleAddToBudget}
        className={`flex items-center space-x-1 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors ${className}`}
      >
        <FileText className="w-3 h-3" />
        <span>Presupuesto</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToBudget}
      className={`flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors ${className}`}
    >
      <FileText className="w-4 h-4" />
      <span>Presupuesto</span>
      {budgetItemsCount > 0 && (
        <span className="bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {budgetItemsCount}
        </span>
      )}
    </button>
  );
}
