import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TransactionList = () => {
  const { filteredTransactions } = useContext(GlobalContext);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list">
            {filteredTransactions.map(transaction => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TransactionList;
