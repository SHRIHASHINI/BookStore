// import * as React from 'react';
// import Accordion, { AccordionSlots } from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';

// export default function  () {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded}
//         onChange={handleExpansion}
//         slots={{ transition: Fade as AccordionSlots['transition'] }}
//         slotProps={{ transition: { timeout: 400 } }}
//         sx={{
//           '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
//           '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
//         }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>What do I do if I have received a damaged, incorrect, or otherwise defective order?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           If you have received damaged, defective, or incorrectly shipped merchandise please contact customer service <a href='#'>here</a>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>Will the Book Shop sell audibooks or ebooks?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           We sell audiobooks via an affiliate partnership with Libro.fm. You can see the links on the product page of titles that are carried by them. We are working on an indie-friendly ebook solution.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>How does Bookish.org promote local bookstore?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           —Every receipt informs customers about the bookstores near them.
// —If a Bookshop.org customer opts in, their local bookstore will be given their email address
// —Affiliate stores can create recommendation lists (staff picks, etc) on Bookshop.org, boosting their visibility and earning a commission on every sale generated from the list.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>Does Bookish.org allow for in-store pickup?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Bookish.org does not allow for in-store pickup yet, but we hope to in the not too distant future.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>How do I list our sotre's on Bookish.org?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Any books in Ingram's inventory are automatically listed on Bookshop.org.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>How does Bookish.org target online customers?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Bookshop.org is designed to generate affiliate revenue. Our network of publishers, authors, bookstagrammers, celebrity book clubs, and other media sites reaches socially-conscious online consumers who are not yet buying their books online through an independent bookstore.Bookshop.org's interface and purchase process is designed to be as convenient, streamlined, and user-friendly as possible, for an alternative that is just as easy as our competitors.78% of our customers previously were Amazon customers, according to our customer survey.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
      
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>How do I report a problem with the website or my order?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             <a href='#'>Contact Us</a>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

