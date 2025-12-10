use std::io::{stdout,Write};
fn main(){
let (mut a,mut b)=(0.0f32,0.0f32);
let (mut z,mut s)=([0.0;1760],[b' ';1760]);
print!("\x1b[2J");
loop{s.fill(b' ');z.fill(0.0);
for u in 0..90{
let j=u as f32*0.07;
for w in 0..314 { 
let i=w as f32*0.02;
let (c,d,e,f,g)=(i.sin(),j.cos(),a.sin(),j.sin(),a.cos());
let h=d+2.0;
let p=1.0/(c*h*e+f*g+5.0);
let (l,m,n)=(i.cos(),b.cos(),b.sin());
let t=c*h*g-f*e;
let x=(40.0+30.0*p*(l*h*m-t*n))as i32;
let y=(12.0+15.0*p*(l*h*n+t*m))as i32;
let o=(x+80*y)as usize;
let q=(8.0*((f*e-c*d*g)*m-c*d*e-f*g-l*d*n))as i32;
if y>0&&y<22&&x>0&&x<80&&p>z[o]{
z[o]=p;
s[o]=b".,-~:;=!*#$@"[q.max(0) as usize];}}}
print!("\x1b[H");
for k in 0..1760 {print!("{}",if k%80==0{'\n'}else{s[k]as char});}
stdout().flush().unwrap();
a+=0.01; b+=0.005;}}

