import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface IMySkill {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<IMySkill[]>([])
  const [greetings, setGreetings] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills([...mySkills, data])
    // setMySkills(oldState => [...oldState, newSkill])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreetings('Good Morning')
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good Afternoon')
    } else {
      setGreetings('Good Evening')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID='welcome'>Welcome Felipe</Text>

      <Text style={styles.greetings}>
        {greetings}
      </Text>

      <TextInput
        testID='new-skill-input'
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button testID='add-new-skill-button' title='Add' onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
        My Skills
      </Text>

      <FlatList
        testID='skills-flat-list'
        data={mySkills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  greetings: {
    color: '#fff',
  }
})