import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterForm from './components/FilterForm';
import SortableTable from './components/SortableTable';

function TablePage() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filters, setFilters] = useState({
    id: 0,
    action: 'all',
    appType: 'all',
    appId: 0,
    fromData: null,
    toDate: null
  })
  console.log(data);
  const getUniqueValues = (data, type) => {
    let unique = data.map(ele => ele[type])
    return ['all', ...new Set(unique)]
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios({
        method: 'GET',
        url: 'https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f'
      })
      // console.log(res.data.result.auditLog);
      setData(res.data.result.auditLog)
      setFilteredData(res.data.result.auditLog)
    }
    fetchData()
  }, [])

  const action = getUniqueValues(data, 'actionType')
  const applicationType = getUniqueValues(data, 'applicationType')


  const handelFilter = (e) => {
    e.preventDefault()
    let tempData = [...data]
    if (Number(filters.id) !== 0) {
      console.log(Number(filters.id));
      tempData = tempData.filter((item) => {
        return item.logId === Number(filters.id)
      })
    }

    if (filters.action !== 'all') {
      tempData = tempData.filter((item) => {
        return item.actionType === filters.action
      })
    }
    if (filters.appType !== 'all') {
      tempData = tempData.filter((item) => {
        return item.applicationType === filters.appType
      })
    }
    if (Number(filters.appId) !== 0) {
      console.log(Number(filters.id));
      tempData = tempData.filter((item) => {
        return item.applicationId === Number(filters.appId)
      })
    }

    if (filters.fromData && filters.toDate) {
      console.log(filters.fromData, filters.toDate);
      tempData = tempData.filter((item) => {
        return item.creationTimestamp >= filters.fromData && item.creationTimestamp <= filters.toDate
      })
    }
    console.log('tempData:', tempData);
    setFilteredData(tempData)
  }


  const config = [
    {
      label: 'Log ID',
      render: (ele) => ele.logId,
      sortValue: (ele) => ele.logId,
    },
    {
      label: 'Application Type',
      render: (ele) => ele.applicationType,
      sortValue: (ele) => ele.applicationType,
    },
    {
      label: 'Application ID',
      render: (ele) => ele.applicationId,
      sortValue: (ele) => ele.applicationId,
    },
    {
      label: 'Action',
      render: (ele) => ele.actionType,
      sortValue: (ele) => ele.actionType,
    },
    {
      label: 'Action Details',
      render: (ele) => ele.details,
      sortValue: (ele) => ele.details,
    },
    {
      label: 'Date:time',
      render: (ele) => ele.creationTimestamp,
      sortValue: (ele) => ele.creationTimestamp,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>

      <FilterForm handelFilter={handelFilter} filters={filters} setFilters={setFilters} action={action} applicationType={applicationType} />
      <SortableTable data={filteredData} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
