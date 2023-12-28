import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Search from './ui/search';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4 space-y-4 bg-slate-500">
      <div className="flex bg-blue-300">
        📊 Budget.nyc
      </div>
      <div className="flex flex-col w-1/2 self-center space-y-4 bg-slate-300">
        <h1 className="text-3xl">Where are my tax dollars going?</h1>
        <p className="text-xl max-w-prose">Most New Yorkers pay X% of their income to the city. Input the city tax you paid in April 2023, and we'll show you where your money went.</p>
        <Search placeholder={'City tax paid'} />
        <table className="table-auto text-left w-full bg-yellow-300">
          <thead>
            <tr>
              <th>Expense Category</th>
              <th>Tax Dollars Spent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              <td>Test 2</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test 2</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
