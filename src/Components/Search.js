import React , { Component } from 'react';
import {Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap';
import {API_KEY} from '../Secret';
import { movies } from '../Actions'
import { connect } from 'react-redux';
class Search extends Component{

    constructor(props){
        super(props);

        this.state = {
            query: ''
        };
    }

    /*
    convertBinaryToHexadecimal(binaryString)
    {
        var output = '';

        // For every 4 bits in the binary string
        for (var i=0; i < binaryString.length; i+=4)
        {
            // Grab a chunk of 4 bits
            var bytes = binaryString.substr(i, 4);

            // Convert to decimal then hexadecimal
            var decimal = parseInt(bytes, 2);
            var hex = decimal.toString(16);

            // Uppercase all the letters and append to output
            output += hex.toUpperCase();
        }

        return output;      
    }
    StringCheck()
    {
        var PADDING = "00000000"

        var string = "FRED";
        var resultArray = []
        
        for (var i = 0; i < string.length; i++) {
          var compact = string.charCodeAt(i).toString(16)
          var padded  = compact.substring(0, PADDING.length - compact.length) + compact
        
          resultArray.push(padded)
        }
        
        console.log(resultArray.join(" "))
        
    }
    /*rbinarytoString(text) 
    {
        var hex, i;

        var result = "";
        for (i=0; i<text.length; i++) {
            hex = text.charCodeAt(i).toString(16);
            result += ("000"+hex).slice(-4);
        }
    
        console.log(
         result);
          
    }*/
/*
    binaryToString(input) {
        let bytesLeft = input;
        let result = '';
      
        // Check if we have some bytes left
        while (bytesLeft.length) {
          // Get the first digits
          const byte = bytesLeft.substr(0, 8);
          bytesLeft = bytesLeft.substr(8);
      
          result += String.fromCharCode(parseInt(byte, 2));
        }
      
        return result;
    }
    reverse(s){
        return s.split("").reverse().join("");
    }
    stringToBinary(input) {
        var characters = input.split('');
      
        return characters.map(function(char) {
          const binary = char.charCodeAt(0).toString(2)
          const pad = Math.max(8 - binary.length, 0);
          // Just to make sure it is 8 bits long.
          return '0'.repeat(pad) + binary;
        }).join('');
      }
      convertHexadecimalToBinary(hexString)
      {
          var output = '';
  
          // For each hexadecimal character
          for (var i=0; i < hexString.length; i++)
          {
              // Convert to decimal
              var decimal = parseInt(hexString.charAt(i), 16);
  
              // Convert to binary and add 0s onto the left as necessary to make up to 4 bits
              var binary = this.leftPadding(decimal.toString(2), '0', 4);
  
              // Append to string         
              output += binary;
          }
  
          return output;
      }

      toBinary(input) 
      {
		var result = "";
		for (var i = 0; i < input.length; i++) {
			var bin = input[i].charCodeAt().toString(2);
			result += Array(8 - bin.length + 1).join("0") + bin;
		} 
		return result;
    }
    toAscii(input) 
    {
		var result = "";
		var arr = input.match(/.{1,8}/g);
		for (var i = 0; i < arr.length; i++) {
			result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
		}
		return result;
	}
    /*hex32(text) 
    {
        //var PADDING = "00000000";
        //var padded  = bin.substring(0, PADDING.length - bin.length) + bin

        //console.log(this.binarytoString());
        
        let reverse = this.reverse(text);
        let binar =  this.stringToBinary(text);
        console.log(binar);
        let strinar = this.binaryToString(binar);
        console.log("sty: "  + strinar);
        
        var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(16);
    output.push(bin);
  } 
  console.log(output.join(''));
        
  
  let tosis = this.toAscii(binar);
  let tobin = this.toBinary(text);
  console.log( tosis, tobin);
  let hexa = this.convertBinaryToHexadecimal(tobin);
  console.log(hexa);
  
        var data = text;
        
        console.log("0x" + data.charCodeAt().toString(16));
        
        
        //console.log(data);
        /*var result=0;
        for (let i=3;i>=0;i--) 
        {
            result+=val.charCodeAt(3-i)<<(8*i);
        }
        console.log(result);*/
    //}
    //DisplayCheck()
    //{
       
        
        //this.hex32(this.state.query);
        //this.StringCheck();
        //this.hexNUm(167777217);
        //console.log("display clicked");
        
            //let asc = toBytesInt32('FRED');
            // Define the string
           // var string = 'FRED';
                //console.log(asc);
                
        // Encode the String
           // var encodedString = btoa(string);
        //console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

            // Decode the String
       // var decodedString = atob(encodedString);
        //console.log(decodedString); // Outputs: "Hello World!"
       /* let encodedData = 'AAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEA==',
        decodedData = window.atob(encodedData),
        result = [],
        i = 0;
    
        while (i < decodedData.length) {
            result.push(getInt(decodedData.slice(i, i += 4)));
        }
    
        console.log(result);*/
    //}
    /*function getInt(string) {
        var view = new DataView(new ArrayBuffer(4)),
            i;
    
        for (i = 0; i < string.length; i++) {
            view.setUint8(i, string.charCodeAt(i));
        }
        return view.getInt32(0);
    }*/
    
   
    /*Time()
    {
        let str = "A"
        
            var arr1 = [];
            for (var n = 0, l = str.length; n < l; n ++) 
             {
                var hex = Number(str.charCodeAt(n)).toString(32);
                arr1.push(hex);
             }
             console.log(arr1.join(''));
             
            //return arr1.join('');
           
    }*/
    Search(){
        
        
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
        //console.log("search clicked" , url);
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
        .then(moviesObject => {this.props.movies(moviesObject.results)});
    }
    render(){

        return(
            <div>
                <Form inline className="search-form">
                    <FormGroup>
                        <FormLabel>
                            Search 
                        </FormLabel>&nbsp;
                        <FormControl type="text" placeholder="Wonder Woman"
                        onChange={(event)=>this.setState({query:event.target.value})}/>
                        &nbsp;<Button variant="success" onClick={()=>this.Search()}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        
        );
    }
}


export default connect(null, {movies})(Search);