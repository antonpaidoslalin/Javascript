let n=0;
do
{
    n = +prompt("Escriba o número do control de calidade: ", 0);
    if (n<=100){
        document.write ('<br>Control de calidade non superado (', n, '), reforme e reintente');
    }
}
while(n <= 100);
document.write('<br>Control de calidade superado (', n , ')');