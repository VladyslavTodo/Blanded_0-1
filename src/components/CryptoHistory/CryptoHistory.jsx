import { format } from 'date-fns'
import {normalizeDateMomeElse} from 'helpers/normalizeDate'

import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({transactions}) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>Price</Th>
          <Th>Amount</Th>
          <Th>Data</Th>
        </tr>
      </THead>
      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => {
          return (
            <Tr key={id}>
              <Td>{index + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{normalizeDateMomeElse(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
