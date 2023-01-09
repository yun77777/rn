import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri:"https://images.unsplash.com/photo-1599580506193-fef9dc35b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
          }} 
          className="h7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">Current Location</Text>
      </View>
      </View>
      
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen