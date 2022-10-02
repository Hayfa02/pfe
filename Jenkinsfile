pipeline {
    agent any
      stages {
        
  
         
          stage(' test qualité de code') {
              steps {
                  
                  dir("Backend/"){
                    sh ' sonar-scanner.bat -D"sonar.projectKey=pfe-backend" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=sqp_a4a4d451cd539af0533256bdef43f913b053f7ae" '
                  }
        
                      }    

      }
     
    }
      
         
         
    
      }

  
