function areaRectangle() {
var a=document.forma1.t1.value;
var b=document.forma1.t2.value;
var s=a*b;
document.forma1.res.value=s;
}


function f()
{
  link='http://anya-m.1gb.ru/puthist.php?reqtxt='+document.getElementById("field").value;
  window.location.href=link;
}

function histlatex()
{
  link='http://anya-m.1gb.ru/puthist_latex.php';
  window.location.href=link;
}

function histpdf()
{
  link='http://anya-m.1gb.ru/puthist_pdf.php';
  window.location.href=link;
}


function Tree() 
{
    var proverka = true;
    var text = document.getElementById("field").value;
    var line = document.getElementById("field").value;
    var op_br=0;
    var cl_br=0;


    for (i = 0; i < text.length; i++) 
  {
          if (text[i] >= '0' && text[i] <= '9' || text[i] >= 'a' && text[i] <= 'z' || text[i] == '+' || text[i] == '-' || text[i] == '*' || text[i] == '/' || text[i] =='^' || text[i] == '(' || text[i] == ')') 
    { 
    }        
           else 
    {
                alert("По крайней мере один из символов недопустим");
                proverka = false;
                break;
          }

    
    if ( (text[0]=='0') && (text[1]>='0' && text[1]<='9') )
    {
      alert("Целые числа не могут начинаться с 0");
                        proverka = false;
                        break;
    }

    if ( (text[i]=='0')&&(text[i-1]=='+' || text[i-1] == '-' || text[i-1] == '*' || text[i-1] == '/' || text[i-1] =='^' || text[i-1] == '(') && (text[i+1] >= '0' && text[i+1] <= '9') ) 
    {
      alert("Целые числа не могут начинаться с 0");
                        proverka = false;
                        break;
    }
  
    if ( (text[0] == '+' || text[0] == '-' || text[0] == '*' || text[0] == '/' || text[0] == '^')||(text[text.length-1] == '+' || text[text.length-1] == '-' || text[text.length-1] == '*' || text[text.length-1] == '/' || text[text.length-1]=='^'))  
    {
               alert("Знак стоит в неправильном месте");
               proverka = false;
               break;
          }

    if ( (text[i] == '+' || text[i] == '-' || text[i] == '*' || text[i] == '/' || text[i] == '^') && (text[i+1] == '+' || text[i+1] == '-' || text[i+1] == '*' || text[i+1] == '/' || text[i+1] == '^') )
    {
               alert("Несколько знаков стоят подряд");
               proverka = false;
               break;
          }

  
    if ( (text[i]=='(')&&(text[i+1]=='*'||text[i+1]=='+' || text[i+1]=='-'||text[i+1]=='/'||text[i+1]=='^') )
    {
                alert("Недопустимый символ после (");
                proverka = false;
                break;
    }

    if ( (text[0] == ')')||(text[text.length - 1]=='(') )
    {
                      alert("Скобки стоят неправильно");
                  proverka = false;
                      break;
          } 
          
    
    if ( (text[i]=='(')&&(text[i+1]==')') )
    {
                alert("Скобки стоят неправильно");
                proverka = false;
                break;
    } 
    
    if ( (text[i]==')')&&(text[i+1]=='(') )
    {
                alert("Скобки стоят неправильно");
                proverka = false;
                break;
    }

    if ( text[i]=='(' ) op_br=op_br+1;
    if ( text[i]==')' ) cl_br=cl_br+1;
          
      }
      if ( (op_br-cl_br) != 0 ) 
  {
          alert("Скобки стоят неправильно");
          proverka = false;
      }


  if (proverka == true)
        for (i = 0; i < text.length; i++) 
  {
          if (text[i] >= 'a' && text[i] <= 'z') 
    {
                  if (i != text.length - 1) 
      {
                        if (text[i + 1] == '+' || text[i + 1] == '-' || text[i + 1] ==             '*' || text[i + 1] == '/' || text[i + 1] == '^' || text[i + 1] ==           ')')
                          {line = line.replace(line[i], "_");
}
                        else 
        {
                            alert("Недопустимый символ после буквы");
                            proverka = false;
                            break;
                        }
                  }
                  else line = line.replace(line[i], "_");
      if (i != 0) 
      {
        if (text[i - 1] == ')')
        {
                            alert("Недопустимый символ до буквы");
                            proverka = false;
                            break;
                        }
      }
  
              }

    

    

    if (text[i] >= '0' && text[i] <= '9') 
    {
                  if (i != text.length - 1) 
      {
                        if (text[i + 1] == '+' || text[i + 1] == '-' || text[i + 1] ==             '*' || text[i + 1] == '/' || text[i + 1] == '^' || text[i + 1] ==         ')' || text[i + 1] >= '0' && text[i + 1] <= '9')
                          {line = line.replace(line[i], "_");
}
                        else 
        {
                            alert("Недопустимый символ после цифры");
                            proverka = false;
                            break;
                        }
                  }
                  else line = line.replace(line[i], "_");
      if (i != 0) 
      {
        if (text[i - 1] == ')')
        {
                            alert("Недопустимый символ до цифры");
                            proverka = false;
                            break;
                        }
      }
          }

    
        }




  var m = [];
      var pr = 0;
      for (i = 0; i < line.length; i++) 
  {

    if (line[i] == '_') 
    {
                if (pr == 1)
                  m[m.length - 1] += text[i]; 
                else 
      {
                    m.push(text[i]);
                    pr = 1;
                }
          }
    else
    {
                m.push(line[i]);
                pr = 0;
          }
          
  }

  var mm = [];
      br = 0;
      var vlow = 0;
      for (i = 0; i < m.length; i++) 
  {
          if (m[i] == '(') 
    {

                mm[i] = { "naimen": "(", "yes": 0, "uroven": -1};
                br++;
                if (br > vlow) vlow = br;
          }
          else if (m[i] == ')') 
    {

                mm[i] = { "naimen": ")", "yes": 0, "uroven": -1};
                br--;
          }
          else if (m[i] == '+' || m[i] == '-' || m[i] == '*' || m[i] == '/' || m[i] == '^')
              mm[i] = { "naimen": m[i], "yes": 0, "uroven": br, "nn": 0};
          else
             mm[i] = { "naimen": m[i], "yes": 1, "uroven": -1};
  }



  var nn = 1;
     var stepen = 0, umnow = 0, summ = 0;
      var exist_op;
      do 
  {
          exist_op = 0;
          if (stepen == 0) 
    {
                for (i = 0; i < mm.length; i++) 
      {
                    if (mm[i].uroven == vlow && mm[i].nn == 0)
                        if (mm[i].naimen == '^') 
        {
                            mm[i].nn = nn;
                            nn++;
                            exist_op = 1;
                        }
                }
                if (exist_op == 0) stepen = 1;
          }
          else if (umnow == 0) 
    {
                for (i = 0; i < mm.length; i++) 
      {
                    if (mm[i].uroven == vlow && mm[i].nn == 0)
                        if (mm[i].naimen == '*' || mm[i].naimen == '/') 
        {
                            mm[i].nn = nn;
                            nn++;
                            exist_op = 1;
                        }
                }
                if (exist_op == 0) umnow = 1;
          }
          else if (summ == 0)   
    {
                for (i = 0; i < mm.length; i++) 
      {
                    if (mm[i].uroven == vlow && mm[i].nn == 0)
                        if (mm[i].naimen == '+' || mm[i].naimen == '-') 
        {
                            mm[i].nn = nn;
                            nn++;
                            exist_op = 1;
                        }
                }
                if (exist_op == 0) summ = 1;
          }
          else 
    {
               vlow--;
                stepen = 0;
                umnow = 0;
                summ = 0;
          }
  } while (vlow > -1);

      var koren;
      for (i = 0; i < mm.length; i++)
        if (mm[i].nn == nn - 1) 
  {
             koren = i;
              break;
        }



  var node, left, right;
      for (i = 1; i < nn; i++) 
  {
          node = left = right = 0;
          for (p = 0; p < mm.length; p++)                
              if (mm[p].nn == i) 
    {
                  node = p;
                  for (l = p - 1; l >= 0; l--)                 
                      if (mm[l].yes == 1) 
      {
                          left = l;
                          break;
                      }
                  for (r = p + 1; p < mm.length; r++)        
                      if (mm[r].yes == 1) 
      {
                          right = r;
                          break;
                      }
                  mm[node].children = [mm[left], mm[right]];
                  mm[node].yes = 1;
                  mm[left].yes = 0;
                  mm[right].yes = 0;
                  break;
              }
      }



  





  var margin = {top: 20, right: 0, bottom: 0, left: 0},
        width = 1000 - margin.right - margin.left,
        height = 1000 - margin.top - margin.bottom;
      var i = 0;

      var tree = d3.layout.tree()
        .size([height, width]);

      var diagonal = d3.svg.diagonal()
        .projection(function (d) 
  {
                return [d.x, d.y];
        });

      var svg = d3.select("body").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      root = mm[koren];
      update(root);

      function update(source) 
  {

          var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

          nodes.forEach(function (d) 
    {
                d.y = d.depth * 80;
          });


          var node = svg.selectAll("g.node")
                .data(nodes, function (d) 
    {
                     return d.id || (d.id = ++i);
                });


          var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) 
    {
                      return "translate(" + d.x + "," + d.y + ")";
                });

          nodeEnter.append("circle")
                .attr("r", 15)
                .style("fill", "#ccffcc");

          nodeEnter.append("text")

                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .text(function (d) 
    {
                     return d.naimen;
                });

          var link = svg.selectAll("path.link")
                .data(links, function (d) 
    {
                      return d.target.id;
                });

          link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", diagonal);
      }
      if (proverka == false) 
  {
          d3.select("svg")
                .remove();
      }

}
