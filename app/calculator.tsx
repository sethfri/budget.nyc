'use client';

import Search from './ui/search';
import { ChangeEvent, useState } from 'react';

export default function Calculator({ expenseRatios }: { expenseRatios: object[] }) {
  const [cityTaxPaid, setCityTaxPaid] = useState(0);

  return (
    <>
      <Search placeholder={'City tax paid'} onChange={(event) => setCityTaxPaid(parseFloat((event.target as HTMLInputElement).value.replace(/,/g, '') ?? ""))} />
      <table className="table-auto text-left w-full rounded-md bg-yellow-300">
        <thead>
          <tr>
            <th className="pt-2 pl-2" scope="col">Expense Category</th>
            <th className="pt-2" scope="col">Tax Dollars Spent</th>
          </tr>
        </thead>
        <tbody>
          {expenseRatios?.map((expenseRatio) => (
            <tr>
              <td className="pt-2 pl-2">{expenseRatio.expense_category}</td>
              <td className="pt-2">${cityTaxPaid * expenseRatio.expense_ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}