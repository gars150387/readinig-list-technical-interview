import React from 'react';
import { Grid } from '@mui/material';
import './style.css';
import booksData from './books.json';
import Card from './component/Card';
export default function App() {
  const substractGender = useCallback(() => {
    const objCheck = {};
    for (let data of booksData.library) {
      if (!objCheck[data.book.genre]) {
        objCheck[data.book.genre] = 1;
      }
    }
    return Object.keys(objCheck);
  }, []);
  // substractGender();
  const substractPages = useCallback(() => {
    const objCheck = {};
    for (let data of booksData.library) {
      if (!objCheck[data.book.pages]) {
        objCheck[data.book.pages] = 1;
      }
    }
    return Object.keys(objCheck);
  }, []);
  // substractPages();
  return (
    <Grid container>
      <Grid item={8}>
        <Grid item xs={12}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        {booksData.library.map((item) => {
          console.log(item.book);
        })}
      </Grid>
      <Grid item sx={4}></Grid>
    </Grid>
  );
}
