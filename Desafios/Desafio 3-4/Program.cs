using System;

    class MinhaClasse {
        static void Main(string[] args) {
            Console.WriteLine("Segundos: ");
            var timeInSeconds = int.Parse(Console.ReadLine());

       //continue a solucao
            var hours = 0;
            var minutes =  0;
            var seconds = 0;
            var m = 0;
          
          for(int i = 0; i < timeInSeconds; i++){
          
            seconds = seconds + 1;
            
            if(seconds == 60){
              m = m + 1;
              minutes = minutes + 1;
              seconds = 0;
            
            }else if(m == 60){
              minutes = 0;
              hours = hours + 1;
              m = 0;
                
            }else{
              
              continue;
              
            }
              
          }
            Console.WriteLine($"{hours}:{minutes}:{seconds}");
        }
    }