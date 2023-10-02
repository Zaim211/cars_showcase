"use client"

import { CarState } from "@/types";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([])
  const [loading, setLoading] = useState(false)

  const [manufacturer, setManuFacturer] = useState("")
  const [model, setModel] = useState("")

  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2022)

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || 2022,
        limit: limit || 10,
      });

      setAllCars(result);
    } catch {
      console.error()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, model, manufacturer])

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar 
            setManuFacturer={setManuFacturer}
            setModel={setModel}
          />

          <div className='home__filter-container'>
            <CustomFilter options={fuels} setFilter={setFuel}/>
            <CustomFilter options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={`car-${index}`} car={car} />
              ))}
            </div>

            {loading && (
              <div className="flex-center mt-16 w-full">
                <Image 
                  src="/loader.svg"
                  alt="loader"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>  
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}