import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, useColorModeValue, Text, Center, Select, Image, Spacer } from "@chakra-ui/react";
import Ticker from "react-ticker";
import { VolTTpools24h } from "../VolTTpools24h/VolTTpools24h";
import { VolTTpools7d } from "../VolTTpools7d";
import { VolTTpools30d } from "../VolTTpools30d";
import { VolTTpairs24h } from "../VolTTpairs24h";
import { VolTTpairs7d } from "../VolTTpairs7d/VolTTpairs7d";
import { VolTTpairs30d } from "../VolTTpairs30d/VolTTpairs30d";
import { LiqTTpools24h } from "../LiqTTpools24h";
import { LiqTTpools7d } from "../LiqTTpools7d";
import { LiqTTpools30d } from "../LiqTTpools30d";
import { LiqTTpairs24h } from "../LiqTTpairs24h/LiqTTpairs24h";
import { LiqTTpairs7d } from "../LiqTTpairs7d/LiqTTpairs7d";
import { LiqTTpairs30d } from "../LiqTTpairs30d/LiqTTpairs30d";

//API Key
const API_KEY = "ckey_4e73d56514984838ab3206fbaf4";
const LOGO_URL = "https://media-exp1.licdn.com/dms/image/C560BAQHZftuIJc5OMQ/company-logo_200_200/0/1616601285421?e=2147483647&v=beta&t=j6DJiJFHvVEFGFKU6rki6dFXYO4m3c43X0jKwe6H7_A"

export const Requirement = (props) => {
    const [items, setItems] = useState([]);
    const chainNameText = useColorModeValue("black", "gray.500");
    const TextColorMode = useColorModeValue("brand.200", "brand.300");
    const BoxTextColor = useColorModeValue("red", "green");
    const borderColor = useColorModeValue("#0c141c", "gray.600");
    const BoxBgColor = useColorModeValue("#0c141c", "#243036");
    const [volumeLiquidity, setVolumeLiquidity] = useState('vol');
    const [tradingCategory, setTradingCategory] = useState('ttpools');
    const [timeFrame, setTimeFrame] = useState('24h');



        return (
            <>                  
          <Flex
                bg={BoxBgColor}
                w="full"
                borderColor={borderColor}
          >
              <Box >
                  <Select
                      placeholder="Select an option"
                      size='xs'
                      variant='filled'
                      value={volumeLiquidity}
                      width='100px'
                      onChange={(e) => setVolumeLiquidity(e.target.value)}
                      bgColor={BoxBgColor}
                      >
                      <option value="vol">Volume</option>
                      <option value="liquidity">Liquidity</option>
                      
                  </Select>
              </Box>
              <Box >
                  <Select
                      placeholder="Select an option"
                      size='xs'
                      variant='filled'
                      value={tradingCategory}
                      onChange={(e) => setTradingCategory(e.target.value)}
                      bgColor={BoxBgColor}
                      >
                      <option value="ttpools">Top trading pools</option>
                      <option value="ttpairs">Top trading pairs</option>
                  </Select>
              </Box>
              <Box >
                  <Select
                      placeholder="Select an option"
                      size='xs'
                      variant='filled'
                      value={timeFrame}
                      width='70px'
                      onChange={(e) => setTimeFrame(e.target.value)}
                      bgColor={BoxBgColor}
                      >
                      <option value="24h">24h</option>
                      <option value="7d">7d</option>
                      <option value="30d">30d</option>
                  </Select>
              </Box>
              <Spacer />
              Powered by 
              <Image
              borderRadius='full'
              boxSize='30px'
              objectFit='cover'
              src='https://media-exp1.licdn.com/dms/image/C560BAQHZftuIJc5OMQ/company-logo_200_200/0/1616601285421?e=2147483647&v=beta&t=j6DJiJFHvVEFGFKU6rki6dFXYO4m3c43X0jKwe6H7_A'
              alt='Dan Abramov'
              />
          </Flex>            
          {
                (() => {
                    if(volumeLiquidity==='vol' && tradingCategory==='ttpools' && timeFrame==='24h') {
                        return (
                            <VolTTpools24h
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )
                    } 
                    else if (volumeLiquidity==='vol' && tradingCategory==='ttpools' && timeFrame==='7d') {
                        return (
                            <VolTTpools7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='vol' && tradingCategory==='ttpools' && timeFrame==='30d') {
                        return (
                            <VolTTpools30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='vol' && tradingCategory==='ttpairs' && timeFrame==='24h') {
                        return (
                            <VolTTpairs24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='vol' && tradingCategory==='ttpairs' && timeFrame==='7d') {
                        return (
                            <VolTTpairs7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='vol' && tradingCategory==='ttpairs' && timeFrame==='30d') {
                        return (
                            <VolTTpairs30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpools' && timeFrame==='24h') {
                        return (
                            <LiqTTpools24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpools' && timeFrame==='7d') {
                        return (
                            <LiqTTpools7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpools' && timeFrame==='30d') {
                        return (
                            <LiqTTpools30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpairs' && timeFrame==='24h') {
                        return (
                            <LiqTTpairs24h 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpairs' && timeFrame==='7d') {
                        return (
                            <LiqTTpairs7d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else if (volumeLiquidity==='liquidity' && tradingCategory==='ttpairs' && timeFrame==='30d') {
                        return (
                            <LiqTTpairs30d 
                            chain_id={props.chain_id}
                            dex_name={props.dex_name}
                            />
                        )}
                    else {
                    return (
                        <p>Oops! Something's wrong.</p>
                    )
                }
                })()  
            } 

          </>
        );

    }    

  




