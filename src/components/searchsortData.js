import React from 'react'
import { useState, useEffect } from 'react'

const SearchSortData = ({ sortedValue, searchedData }) => {
    const [apiData, setapiData] = useState([]);
    const [backupData, setBackupData] = useState([]);       //used for searching while clearing searched Data
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true);

    // Fetching the Api having student Data demo
    useEffect(()=>{
        const fetchedData = async () => {
            try{
                const response = await fetch ("https://freetestapi.com/api/v1/students")
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const data = await response.json();
                setapiData(data);
                setBackupData(data);
                setloading(false);
            }catch(err){
                seterror(err.message)
                setloading(false);
            }finally{
                setloading(false)
            }
        }

        fetchedData()
    }, [])

    // Sorting the Data
    
    useEffect(() => {
        const sortedData = [...apiData].sort((a, b) => {
        if (sortedValue === "name") {
            if (a.name.localeCompare(b.name) !== 0) {
            return a.name.localeCompare(b.name);
            }
        } else if (sortedValue === "age") {
            if (a.age !== b.age) {
            return a.age - b.age;
            }
        } else {
            return a.id - b.id;
        }                           //add more sorting conditions if needed.
        });
        setapiData(sortedData);     // if sorted, sortedData is stored to the "apiData"
    }, [sortedValue]);       //when ever the option/data of sortedValue is changed, the useEffect runs.


    // Searching the data
    useEffect(() => {
        if (searchedData) {
            const filteredData = backupData.filter(item =>
                item.name.toLowerCase().includes(searchedData.toLowerCase()) // Filtering by the 'name'.
            );
            setapiData(filteredData);
        } else {
            setapiData(backupData);
        }
    }, [searchedData, backupData]);   //whenever the searchedData makes a change, the useEffect runs.




  return (
    <div>
        {/* Mapping the fetched Data */}
        {error && <p>{error.message}</p>}
        {loading && <p>Loading...</p>}
        {apiData && 
            <ul>
                {apiData.map((item)=>{
                    return <li key={item.id}>{item.id}. {item.name}, Age: {item.age}</li>
                })}
            </ul>
        }
    </div>
  )
}

export default SearchSortData;