import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import { Box, Flex, useColorModeValue, Text, Center, Select, Image, StatArrow } from "@chakra-ui/react";
import Ticker from "react-ticker";


export const LiqTTpairs7d = (props) => {
  const [finalData, setFinalData] = useState([]);
  const chainNameText = useColorModeValue("black", "gray.500");
  const TextColorMode = useColorModeValue("brand.200", "brand.300");
  const BoxTextColor = useColorModeValue("red", "green");
  const borderColor = useColorModeValue("gray.100", "gray.600");
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  let blockchain_id = props.chain_id
  let dex_name = props.dex_name
  //console.log('These are the props value!')
  //console.log(props.chain_id)
  //console.log(props.dex_name)

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.covalenthq.com/v1/${blockchain_id}/xy=k/${dex_name}/tokens/widget/?key=ckey_4e73d56514984838ab3206fbaf4`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        objTraversal(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  var finalArr = [];
 
  

  function objTraversal(obj) {
    var itemArr = obj.data.items;



    for (let i = 0; i < itemArr.length; i++) {
      //console.log(itemArr[i])
      var sampleArr = itemArr[i].total_liquidity_timeseries_7d;
      //console.log(sampleArr)
      var sevenDayArr = [];
      var volumePrecentArray = [];
      var volumeQuoteArr = [];
      for (let j = 0; j < sampleArr.length; j++) {
        volumeQuoteArr.push({ liquidityQuote: sampleArr[j].total_liquidity_24h_quote });
      }
      sevenDayArr.push(volumeQuoteArr);
      finalArr.push({liquidity24hQuote: itemArr[i].total_liquidity_quote, tickerPair : itemArr[i].contract_ticker_symbol, liquidityQuoteTS: sevenDayArr, liquidityPercentChange : Math.round(((sevenDayArr[0][7].liquidityQuote - sevenDayArr[0][0].liquidityQuote) * 100 / (sevenDayArr[0][0].liquidityQuote)+ Number.EPSILON)*100)/100 });
      
    }
    setFinalData(finalArr);
    }



console.log(finalData);

return (
    <>
    <Ticker offset="run-in" speed={10}>
      {({}) => (
        <Flex
          borderRadius="xl"
          bg={BoxBgColor}
          p={0.1}
          w="full"
          alignItems="center"
          justifyContent="center"
          borderColor={borderColor}
          borderWidth={1}
          mb={8}
        >
            {finalData.map((i) => (
            <Box 
            w="300px"
            maxW="xs"
            mx="auto"
            px={2}
            py={3}
            bg={BoxBgColor}
            shadow="md"
            borderColor="red.400"
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="md" color={chainNameText}>
                  {i.tickerPair}
                </Text>

                <Text
                  bg={TextColorMode}
                  color={[i.liquidityPercentChange > 0 ? "green" : i.liquidityPercentChange < 0 ? "red" : "yellow"]}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                >
                  {i.liquidityPercentChange}%
                </Text>
              </Flex>
              <Flex>
              <Box>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  mt={2}
                  color={TextColorMode}
                >
                 ${i.liquidity24hQuote}
                </Text>
              </Box>
              <Box alignItems="center">
                <LineChart width={100} height={100} data={i.liquidityQuoteTS[0]}>
                    <Line type="monotone" dataKey="liquidityQuote" stroke={[i.liquidityPercentChange > 0 ? "green" : i.liquidityPercentChange < 0 ? "red" : "yellow"]} dot={false}/>
                </LineChart>
              </Box>
              </Flex>  
            </Box>
            ))}
        </Flex>
      )}
    </Ticker>
    </>
  );
};

