#include <Keypad.h>

const byte ROWS = 4; 
const byte COLS = 4; 

int led = 13;

char userID[3];

char hexaKeys[ROWS][COLS] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[ROWS] = {9, 8, 7, 6}; 
byte colPins[COLS] = {5, 4, 3, 2}; 

Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS); 

void setup(){
  Serial.begin(9600);
  pinMode(led, OUTPUT);

  void CheckUser();


    Serial.println("=== Keyboard ===");
    Serial.println("A - Login");
    Serial.println("B - Remove User");
    Serial.println("C - Print time");
    Serial.println("D - Create User");
    Serial.println("=== Keyboard ===");
   
}
  
void loop(){
  char keyInput = customKeypad.getKey();

  if (keyInput){
    Serial.println("=== Keyboard ===");
    Serial.println("A - Login");
    Serial.println("B - Remove User");
    Serial.println("C - Print time");
    Serial.println("D - Create User");
    Serial.println("=== Keyboard === \n");

    Serial.println(keyInput);
    switch(keyInput){
      case 'A':
      EnterID();
      Serial.println("User login Successful");
      // Continue logged in
      break;
      case 'B':
        Serial.println("Remove ID");
      break;
      case 'C':
      unsigned long time;
        Serial.println("Log time in serial");
        Serial.print("Time: ");
      break;
      case 'D':
        EnterID();
        Serial.println("Back to case D");
        //CheckUser(userID); 
       break; 
     
    } // switch()
  } // keyInput()
} // loop()

   void EnterID(){
      char keyInput = customKeypad.getKey();

      digitalWrite(led, HIGH);
      Serial.println("Enter ID..");
      memset( userID, 3, 0); // clear the array
      for(int i=0; i<2;i++){
        do{
            keyInput = customKeypad.getKey();
           }while(keyInput == NO_KEY);
        userID[i] = keyInput;
        } // for()
      Serial.print("UserID is ");
      Serial.println(userID);
      digitalWrite(led, LOW);

  
  
  
  } // EnterID()
