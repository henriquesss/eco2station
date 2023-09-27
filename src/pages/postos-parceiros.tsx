/* eslint-disable no-console */
import React, { useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import Analytics from "../components/Analytics";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";

const PostosParceiros: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [averagaGas, setAverageGas] = useState("0");
  const [averageAlcohol, setAverageAlcohol] = useState("0");
  const [averageDiesel, setAverageDiesel] = useState("0");
  const [errors, setErrors] = useState<{
    stationName: string;
    flag: string;
    state: string;
    city: string;
  }>({ stationName: "", flag: "", state: "", city: "" });

  const handleSubmit = (event: any) => {
    try {
      event.preventDefault();

      let newErrors = { ...errors };

      if (name === "")
        newErrors = { ...newErrors, stationName: "Preencha o campo nome" };
      if (flag === "")
        newErrors = { ...newErrors, flag: "Preencha o campo bandeira/rede" };
      if (city === "")
        newErrors = { ...newErrors, city: "Selecione uma cidade" };
      if (state === "")
        newErrors = { ...newErrors, state: "Selecioone um estado" };

      setErrors(newErrors);

      if (Object.keys(errors).length > 0) return false;

      const data = {
        name,
        flag,
        city,
        state,
        averageGas: parseFloat(averagaGas),
        averageAlcohol: parseFloat(averageAlcohol),
        averageDiesel: parseFloat(averageDiesel),
      };

      const requestData = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      fetch("/api/new-station", requestData).then((res) => {
        if (res.status === 200) {
          toast.success("Contato enviado com sucesso!");
          router.push("/obrigado");
        } else {
          toast.error("Erro ao enviar mensagem");
        }
      });
    } catch (error) {
      console.log(error);
    }

    return true;
  };

  return (
    <div>
      <Head>
        <title>Seja um parceiro green.</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-8`}
        >
          <Header />
        </div>
      </div>
      <LazyShow>
        <>
          <section className={`bg-background py-8`} id="how">
            <div className={`container max-w-5xl mx-auto m-8`}>
              <h1
                className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
              >
                <span key={1} className={"text-border"}>
                  Seja um posto parceiro agora
                </span>
              </h1>
              <Divider />
              <div className="flex flex-wrap">
                <div className="p-6 text-center">
                  <p className="text-gray-600">
                    Preencha os campos abaixo corretamente e nosso time entrará
                    em contato com você rapidamente para o alinhamento dos
                    próximos passos e possíveis dúvidas sobre a solução
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-2">
                    {errors.stationName != "" && (
                      <p className="text-red-700">{errors.stationName}</p>
                    )}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Nome do posto
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Nome do posto"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="w-full px-3 mb-2">
                    {errors.flag !== "" && (
                      <p className="text-red-700">{errors.flag}</p>
                    )}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Bandeira/rede
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Bandeira/rede"
                      onChange={(event) => setFlag(event.target.value)}
                    />
                  </div>

                  <div className="w-full px-3">
                    {errors.state !== "" && (
                      <p className="text-red-700">{errors.state}</p>
                    )}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Estado
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="state-input"
                      type="text"
                      placeholder="Estado"
                      onChange={(event) => setState(event.target.value)}
                    />
                  </div>

                  <div className="w-full px-3">
                    {errors.city !== "" && (
                      <p className="text-red-700">{errors.city}</p>
                    )}
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Cidade
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="city-input"
                      type="text"
                      placeholder="Cidade"
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                </div>

                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Média de combustíves mensalmente
                </label>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      Gasolina
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="gas"
                      type="number"
                      placeholder="Litros"
                      min={0}
                      onChange={(event) => setAverageGas(event.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      Alcool
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="alcool"
                        type="number"
                        placeholder="Litros"
                        min={0}
                        onChange={(event) =>
                          setAverageAlcohol(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Diesel
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="diesel"
                      type="number"
                      placeholder="Litros"
                      min={0}
                      onChange={(event) => setAverageDiesel(event.target.value)}
                    />
                  </div>
                </div>

                <div className="text-center mt-10">
                  <button
                    type="button"
                    className="w-full font-bold text-white bg-gradient-to-br from-green-400 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Enviar solicitação
                  </button>
                </div>
              </form>
            </div>
          </section>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default PostosParceiros;
