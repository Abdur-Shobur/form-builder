'use client';
import React from 'react';
import {
  AgentStore,
  StoreContact,
  UserSupportTicketMutation,
} from '../../../ant-forms';
import DragAndDropCSVPrintData from '../../../ant-forms/drag-drop-csv-file-up-user-print-data';
import { Button } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { StoreUserCampaign } from '../../../ant-forms/user-campaign-store';

export default function Page() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-2 gap-5">
        <StoreContact />
        <div>
          <div>
            <h1 className="text-xl font-semibold  ">
              CSV File Extractor And View
            </h1>
            <p className="text-sm font-medium   ">Only Accept CSV files.</p>
          </div>
          <DragAndDropCSVPrintData
            name="file"
            onChange={() => {}}
            initialPreview=""
          />
          <h3 className="font-medium mb-2">Download Sample File</h3>
          <a href="/sample_contacts.csv" download="sample_contacts.csv">
            <Button type="default" icon={<CloudDownloadOutlined />}>
              Download
            </Button>
          </a>
        </div>
        <AgentStore onCancel={() => {}} />
        <StoreUserCampaign onCancel={() => {}} />
        <UserSupportTicketMutation onCancel={() => {}} />
      </div>
    </div>
  );
}
