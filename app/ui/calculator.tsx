'use client';

import { ExpenseRatio } from '../lib/definitions';
import { formatCurrency } from '../lib/utils';
import InputField from './input-field';
import { useState } from 'react';

export default function Calculator({ expenseRatios }: { expenseRatios: ExpenseRatio[] }) {
  const [cityTaxPaid, setCityTaxPaid] = useState(0);

  return (
    <>
      <InputField placeholder={'City tax paid'} onChange={(event) => {
        const strippedInput = event.target.value.replace(/,/g, '')
        const taxPaid = parseFloat(strippedInput) || 0

        setCityTaxPaid(taxPaid)
      }} />
      <table className="table-auto text-left w-full rounded-lg bg-gray-50">
        <thead className="rounded-lg">
          <tr className="group">
            <th className="pt-4 pb-4 pl-4 pr-16 text-orange-600" scope="col">Expense Category</th>
            <th className="pt-4 pb-4 text-orange-600" scope="col">Tax Dollars Spent</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-white rounded-lg">
          {expenseRatios?.map((expenseRatio) => (
            // Key is a hint to React to help it keep components matched up with data
            // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
            <tr key={'"' + expenseRatio.id + '"'} className="">
              <td className="pt-4 pb-4 pl-4 pr-16">{expenseRatio.expense_category}</td>
              <td className="pt-4 pb-4">{formatCurrency(cityTaxPaid * expenseRatio.expense_ratio)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}