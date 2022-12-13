import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client'
import {Spin, Table} from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import {columns} from "./columns";

const App = () => {
  const [loader, setLoader] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  // запрос на сервер апи
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => {
        let dataSource = []
        data.map((d, i) => {
          d.key = i;
          dataSource.push(d);
        });
        setDataSource(dataSource)
      })
      .catch((e) => {
        alert(e);
        setLoader(false);
      })
      .finally(() => {
        setLoader(false);
      })
  }, []);

  return (
    <div className="main">
      {loader
        ? <Spin tip="Loading" size="large" />
        : <Table dataSource={dataSource} columns={columns} />}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);