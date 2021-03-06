import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import { Box, Flex, useColorModeValue, Text, Square, keyframes } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import "@fontsource/roboto"

export const LiqTTpools24h = (props) => {
  const [finalData, setFinalData] = useState([]);
  const chainNameText = useColorModeValue(props.text_color ? props.text_color : "#FFFFFF", "#FFFFFF");
  const BoxBgColor = useColorModeValue(props.bg_color ? props.bg_color : "#0c141c", "#0c141c");
  //const animation = `${move} 12s linear infinite`;
  let blockchain_id = props.chain_id
  let dex_name = props.dex_name
  let API_KEY = props.api_key

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.covalenthq.com/v1/${blockchain_id}/xy=k/${dex_name}/pools/widget/?key=${API_KEY}`,
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
  
  // Function to traverse through the API data
  function objTraversal(obj) {
    var itemArr = obj.data.items;
    for (let i = 0; i < itemArr.length; i++) {
      var sampleArr = itemArr[i][0].liquidity_timeseries_7d;
      var sevenDayArr = [];
      var liquidityQuoteArr = [];
      for (let j = 0; j < sampleArr.length; j++) {
        const lq =  sampleArr[j].liquidity_quote
        liquidityQuoteArr.push({ liquidityQuote: lq });
      }
      for (let k=0; k< 8-sampleArr.length; k++) {
        const rlq = NaN
        liquidityQuoteArr.push({ liquidityQuote: rlq });
      }
      
      sevenDayArr.push(liquidityQuoteArr);
      const vpc = (Number.isNaN(sevenDayArr[0][7].liquidityQuote) === true ? 'NA' : Math.round(((sevenDayArr[0][7].liquidityQuote - sevenDayArr[0][6].liquidityQuote) * 100 / (sevenDayArr[0][6].liquidityQuote)+ Number.EPSILON)*100)/100)
      finalArr.push({ 
        liquidityQuote: itemArr[i][0].total_liquidity_quote, 
        tickerPair : itemArr[i][0].token_0.contract_ticker_symbol + "-" + itemArr[i][0].token_1.contract_ticker_symbol + " " +"LP", 
        liquidityQuoteTS: sevenDayArr, 
        liquidityPercentChange : vpc
       });
      
    }
    setFinalData(finalArr);
    }

return (
    <>
    <Marquee pauseOnHover='true' speed='60' gradient={false}>
        <Flex
          borderRadius="xl"
          bg={BoxBgColor}
          p={0.1}
          w="full"
          alignItems="center"
          justifyContent="center"
          mb={8}
        >
            {finalData.map((i) => (
            <Box 
            w="300px"
            maxW="xs"
            mx="auto"
            px={2}
            py={0.5}
            bg={BoxBgColor}
            shadow="md"
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="md" color={chainNameText} px={10} fontFamily={'Roboto'}>
                  {i.tickerPair}
                </Text>

                <Text
                  color={[i.liquidityPercentChange > 0 ? "green" : i.liquidityPercentChange < 0 ? "red" : "yellow"]}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {i.liquidityPercentChange.toLocaleString("en-US")}%                  
                </Text>
                <Box alignItems="center" size = '50px' w="60px">
                </Box>
                <Square bg={chainNameText} size='1.5px' height='40px' >
                </Square>
              </Flex> 
            </Box>
            ))}
        </Flex>
      </Marquee>
    </>
  );
};

