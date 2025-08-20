import { useState, useEffect } from 'react';
import { supabase } from '../backend/supabaseClient';

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterEvent, setFilterEvent] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      let query = supabase
        .from('event_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (filterEvent) {
        query = query.eq('event_title', filterEvent);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setRegistrations(data);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      alert('Error fetching registrations');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from('event_registrations')
        .update({ status })
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Refresh the list
      fetchRegistrations();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Roll No', 'Year', 'Branch', 'Event', 'Transaction ID', 'Status', 'Registration Date'];
    const csvData = registrations.map(reg => [
      reg.name,
      reg.email,
      reg.phone,
      reg.rollno,
      reg.year,
      reg.branch,
      reg.event_title,
      reg.transaction_id,
      reg.status,
      new Date(reg.created_at).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'event_registrations.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div style={{ padding: '20px', color: 'white' }}>Loading registrations...</div>;
  }

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2 style={{ color: '#00f7ff', marginBottom: '20px' }}>Admin Panel - Event Registrations</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <select
            value={filterEvent}
            onChange={(e) => setFilterEvent(e.target.value)}
            style={{
              padding: '8px 12px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(0, 247, 255, 0.3)',
              borderRadius: '4px',
              color: 'black'
            }}
        >
          <option value="">All Events</option>
          <option value="Cyber security">Cyber security</option>
          <option value="LLM & API Key Workshop">LLM & API Key Workshop</option>
          {/* Add other event titles as needed */}
        </select>
        
        <button
          onClick={fetchRegistrations}
          style={{
            padding: '8px 16px',
            background: 'rgba(0, 247, 255, 0.2)',
            border: '1px solid rgba(0, 247, 255, 0.3)',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Filter
        </button>
        
        <button
          onClick={exportToCSV}
          style={{
            padding: '8px 16px',
            background: 'rgba(0, 247, 255, 0.2)',
            border: '1px solid rgba(0, 247, 255, 0.3)',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            marginLeft: 'auto'
          }}
        >
          Export to CSV
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
          <thead>
            <tr style={{ background: 'rgba(0, 247, 255, 0.2)' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Email</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Phone</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Roll No</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Event</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Transaction ID</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Date</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(0, 247, 255, 0.3)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(reg => (
              <tr key={reg.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <td style={{ padding: '12px' }}>{reg.name}</td>
                <td style={{ padding: '12px' }}>{reg.email}</td>
                <td style={{ padding: '12px' }}>{reg.phone}</td>
                <td style={{ padding: '12px' }}>{reg.rollno}</td>
                <td style={{ padding: '12px' }}>{reg.event_title}</td>
                <td style={{ padding: '12px' }}>{reg.transaction_id}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: reg.status === 'approved' ? 'rgba(0, 255, 0, 0.2)' : 
                              reg.status === 'rejected' ? 'rgba(255, 0, 0, 0.2)' : 
                              'rgba(255, 255, 0, 0.2)'
                  }}>
                    {reg.status}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{new Date(reg.created_at).toLocaleDateString()}</td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => updateStatus(reg.id, 'approved')}
                      style={{
                        padding: '4px 8px',
                        background: 'rgba(0, 255, 0, 0.2)',
                        border: '1px solid rgba(0, 255, 0, 0.3)',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(reg.id, 'rejected')}
                      style={{
                        padding: '4px 8px',
                        background: 'rgba(255, 0, 0, 0.2)',
                        border: '1px solid rgba(255, 0, 0, 0.3)',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Reject
                    </button>
                    {reg.transaction_screenshot && (
                      <a
                        href={reg.transaction_screenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '4px 8px',
                          background: 'rgba(0, 247, 255, 0.2)',
                          border: '1px solid rgba(0, 247, 255, 0.3)',
                          borderRadius: '4px',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '12px',
                          textDecoration: 'none'
                        }}
                      >
                        View Screenshot
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {registrations.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(255, 255, 255, 0.7)' }}>
          No registrations found
        </div>
      )}
    </div>
  );
};

export default AdminPanel;