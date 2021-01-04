import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
import { buffer } from 'rxjs/operators';
import { IpfsDaemonServiceService } from './ipfs/ipfs-daemon-service.service';
// import * as IPFS from 'ipfs-api';
// import * as IPFS from 'ipfs-http-client';
// const IPFS = require('ipfs-api');
// const IPFS = require('ipfs-http-client');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private IpfsDaemonServiceService: IpfsDaemonServiceService) {

  }

  ngOnInit() {
  }

  uploadImage(event) {
    event.preventDefault();
    this.IpfsDaemonServiceService.addFile(this.buffer).subscribe(data => {
    })
  }
  image: any
  buffer
  selectImage(event) {
    console.log(event);
    const file = event.target.files[0];
    console.log(file, 'file');
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      this.buffer = reader.result;
    }
  }

}
