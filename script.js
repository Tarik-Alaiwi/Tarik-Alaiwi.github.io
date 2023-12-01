function generate(){
    let toInput = "";
    let a = '';
    let key = {
        upper: ['A', 'B', 'C', 'D'],
        lower: ['a', 'b', 'c', 'd'],
        nums: ['1','2','3','4'],
        signs: ['!', '@', '#', '$']
      };
      for(let i=0; i<10; i++){
        let randomChoose = Math.floor(Math.random()*4);
        let rand = Math.floor(Math.random()*4);
        if(randomChoose === 0){
          a = key.upper[rand];
        } else if(randomChoose === 1){
          a = key.lower[rand];
        } else if(randomChoose === 2){
          a = key.nums[rand];
        } else if(randomChoose === 3){
          a = key.signs[rand];
        }
        toInput += a;
      }
      let input = document.querySelector('input');
      input.value = toInput;
}