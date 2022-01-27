const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    }else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    } else {
      return 'Input a day of the week'
    } 
  };
  // console.log(getSleepHours('sunday')) // returns 8 
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  console.log(getActualSleepHours()) // returns 56 (8 * 7)
  
  const getIdealSleepHours = (hoursNeeded) => {
    return hoursNeeded * 7
  }
  console.log(getIdealSleepHours(8)) // remember to input an argument (8)
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} more hours of sleep than you needed!`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours} few hours of sleep than you needed!`)
    } else {
      console.log('Did you sleep at all?')
    }
  }
  calculateSleepDebt() //. reutns the amount of sleep recived