'use client';

import { ExpenseRatio } from '../lib/definitions';
import { formatCurrency } from '../lib/utils';
import Search from './search';
import { useState } from 'react';

export default function Calculator({ expenseRatios }: { expenseRatios: ExpenseRatio[] }) {
  const [cityTaxPaid, setCityTaxPaid] = useState(0);

  return (
    <>
      <Search placeholder={'City tax paid'} onChange={(event) => {
        const strippedInput = event.target.value.replace(/,/g, '')
        const taxPaid = parseFloat(strippedInput) || 0

        setCityTaxPaid(taxPaid)
      }} />
      <table className="table-auto text-left w-full rounded-md bg-yellow-300">
        <thead>
          <tr className="border-b">
            <th className="pt-2 pl-2" scope="col">Expense Category</th>
            <th className="pt-2" scope="col">Tax Dollars Spent</th>
          </tr>
        </thead>
        <tbody>
          {expenseRatios?.map((expenseRatio) => (
            // Key is a hint to React to help it keep components matched up with data
            // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
            <tr key={'"' + expenseRatio.id + '"'} className="border-b">
              <td className="pt-2 pl-2">{expenseRatio.expense_category}</td>
              <td className="pt-2">{formatCurrency(cityTaxPaid * expenseRatio.expense_ratio)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}