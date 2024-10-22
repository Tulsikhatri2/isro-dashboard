"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

interface DataContextType {
  data: any;
  loading: boolean;
  error: string | null;
  fetchCentersData: () => void;
  fetchCustomerSatellitesData: () => void;
  fetchLaunchersData: () => void;
  fetchSpacecraftData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCentersData = async () => {
    try {
      setError(null)
      setLoading(true);
      const response = await axios.get("https://isro.vercel.app/api/centres");
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    }
    finally{
        setLoading(false);
      }
  };

  const fetchCustomerSatellitesData = async () => {
    try {
      setError(null)
      setLoading(true);
      const response = await axios.get(
        "https://isro.vercel.app/api/customer_satellites"
      );
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    }
    finally{
        setLoading(false);
      }
  };

  const fetchLaunchersData = async() => {
    try {
        setError(null)
        setLoading(true);
        const response = await axios.get(
          "https://isro.vercel.app/api/launchers"
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      }
      finally{
        setLoading(false);
      }
  }

  const fetchSpacecraftData = async() => {
    try {
        setError(null)
        setLoading(true);
        const response = await axios.get(
          "https://isro.vercel.app/api/spacecrafts"
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data"); 
      }
      finally{
        setLoading(false);
      }
  }

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        fetchCentersData,
        fetchCustomerSatellitesData,
        fetchLaunchersData,
        fetchSpacecraftData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
