// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: enreach/workload/workload.proto

package types

import (
	fmt "fmt"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type NodeWorkload struct {
	Epoch    uint64 `protobuf:"varint,1,opt,name=epoch,proto3" json:"epoch,omitempty"`
	NodeID   string `protobuf:"bytes,2,opt,name=nodeID,proto3" json:"nodeID,omitempty"`
	Score    uint64 `protobuf:"varint,3,opt,name=score,proto3" json:"score,omitempty"`
	CreateAt uint64 `protobuf:"varint,4,opt,name=createAt,proto3" json:"createAt,omitempty"`
}

func (m *NodeWorkload) Reset()         { *m = NodeWorkload{} }
func (m *NodeWorkload) String() string { return proto.CompactTextString(m) }
func (*NodeWorkload) ProtoMessage()    {}
func (*NodeWorkload) Descriptor() ([]byte, []int) {
	return fileDescriptor_f62260080c3c5bbe, []int{0}
}
func (m *NodeWorkload) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NodeWorkload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NodeWorkload.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NodeWorkload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeWorkload.Merge(m, src)
}
func (m *NodeWorkload) XXX_Size() int {
	return m.Size()
}
func (m *NodeWorkload) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeWorkload.DiscardUnknown(m)
}

var xxx_messageInfo_NodeWorkload proto.InternalMessageInfo

func (m *NodeWorkload) GetEpoch() uint64 {
	if m != nil {
		return m.Epoch
	}
	return 0
}

func (m *NodeWorkload) GetNodeID() string {
	if m != nil {
		return m.NodeID
	}
	return ""
}

func (m *NodeWorkload) GetScore() uint64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *NodeWorkload) GetCreateAt() uint64 {
	if m != nil {
		return m.CreateAt
	}
	return 0
}

type ManagerWorkload struct {
	Epoch              uint64 `protobuf:"varint,1,opt,name=epoch,proto3" json:"epoch,omitempty"`
	ManagerAccount     string `protobuf:"bytes,2,opt,name=managerAccount,proto3" json:"managerAccount,omitempty"`
	ReportedNodesCount uint64 `protobuf:"varint,3,opt,name=reportedNodesCount,proto3" json:"reportedNodesCount,omitempty"`
	Score              uint64 `protobuf:"varint,4,opt,name=score,proto3" json:"score,omitempty"`
	CreateAt           uint64 `protobuf:"varint,5,opt,name=createAt,proto3" json:"createAt,omitempty"`
	UpdateAt           uint64 `protobuf:"varint,6,opt,name=updateAt,proto3" json:"updateAt,omitempty"`
}

func (m *ManagerWorkload) Reset()         { *m = ManagerWorkload{} }
func (m *ManagerWorkload) String() string { return proto.CompactTextString(m) }
func (*ManagerWorkload) ProtoMessage()    {}
func (*ManagerWorkload) Descriptor() ([]byte, []int) {
	return fileDescriptor_f62260080c3c5bbe, []int{1}
}
func (m *ManagerWorkload) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ManagerWorkload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ManagerWorkload.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ManagerWorkload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ManagerWorkload.Merge(m, src)
}
func (m *ManagerWorkload) XXX_Size() int {
	return m.Size()
}
func (m *ManagerWorkload) XXX_DiscardUnknown() {
	xxx_messageInfo_ManagerWorkload.DiscardUnknown(m)
}

var xxx_messageInfo_ManagerWorkload proto.InternalMessageInfo

func (m *ManagerWorkload) GetEpoch() uint64 {
	if m != nil {
		return m.Epoch
	}
	return 0
}

func (m *ManagerWorkload) GetManagerAccount() string {
	if m != nil {
		return m.ManagerAccount
	}
	return ""
}

func (m *ManagerWorkload) GetReportedNodesCount() uint64 {
	if m != nil {
		return m.ReportedNodesCount
	}
	return 0
}

func (m *ManagerWorkload) GetScore() uint64 {
	if m != nil {
		return m.Score
	}
	return 0
}

func (m *ManagerWorkload) GetCreateAt() uint64 {
	if m != nil {
		return m.CreateAt
	}
	return 0
}

func (m *ManagerWorkload) GetUpdateAt() uint64 {
	if m != nil {
		return m.UpdateAt
	}
	return 0
}

func init() {
	proto.RegisterType((*NodeWorkload)(nil), "enreach.workload.NodeWorkload")
	proto.RegisterType((*ManagerWorkload)(nil), "enreach.workload.ManagerWorkload")
}

func init() { proto.RegisterFile("enreach/workload/workload.proto", fileDescriptor_f62260080c3c5bbe) }

var fileDescriptor_f62260080c3c5bbe = []byte{
	// 255 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0xcd, 0x2b, 0x4a,
	0x4d, 0x4c, 0xce, 0xd0, 0x2f, 0xcf, 0x2f, 0xca, 0xce, 0xc9, 0x4f, 0x4c, 0x81, 0x33, 0xf4, 0x0a,
	0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x04, 0xa0, 0x0a, 0xf4, 0x60, 0xe2, 0x4a, 0x79, 0x5c, 0x3c, 0x7e,
	0xf9, 0x29, 0xa9, 0xe1, 0x50, 0xbe, 0x90, 0x08, 0x17, 0x6b, 0x6a, 0x41, 0x7e, 0x72, 0x86, 0x04,
	0xa3, 0x02, 0xa3, 0x06, 0x4b, 0x10, 0x84, 0x23, 0x24, 0xc6, 0xc5, 0x96, 0x97, 0x9f, 0x92, 0xea,
	0xe9, 0x22, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x19, 0x04, 0xe5, 0x81, 0x54, 0x17, 0x27, 0xe7, 0x17,
	0xa5, 0x4a, 0x30, 0x43, 0x54, 0x83, 0x39, 0x42, 0x52, 0x5c, 0x1c, 0xc9, 0x45, 0xa9, 0x89, 0x25,
	0xa9, 0x8e, 0x25, 0x12, 0x2c, 0x60, 0x09, 0x38, 0x5f, 0xe9, 0x2c, 0x23, 0x17, 0xbf, 0x6f, 0x62,
	0x5e, 0x62, 0x7a, 0x6a, 0x11, 0x01, 0x3b, 0xd5, 0xb8, 0xf8, 0x72, 0x21, 0x0a, 0x1d, 0x93, 0x93,
	0xf3, 0x4b, 0xf3, 0x4a, 0xa0, 0x76, 0xa3, 0x89, 0x0a, 0xe9, 0x71, 0x09, 0x15, 0xa5, 0x16, 0xe4,
	0x17, 0x95, 0xa4, 0xa6, 0x80, 0x7c, 0x52, 0xec, 0x0c, 0x56, 0x0b, 0x71, 0x10, 0x16, 0x19, 0x84,
	0x9b, 0x59, 0x70, 0xb9, 0x99, 0x15, 0xd5, 0xcd, 0x20, 0xb9, 0xd2, 0x82, 0x14, 0x88, 0x1c, 0x1b,
	0x44, 0x0e, 0xc6, 0x77, 0x32, 0x3a, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f,
	0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28,
	0x09, 0x58, 0x64, 0x54, 0x20, 0xa2, 0xa3, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89, 0x0d, 0x1c, 0x19,
	0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x54, 0xbf, 0x7a, 0x0d, 0xaf, 0x01, 0x00, 0x00,
}

func (m *NodeWorkload) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NodeWorkload) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NodeWorkload) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CreateAt != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.CreateAt))
		i--
		dAtA[i] = 0x20
	}
	if m.Score != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Score))
		i--
		dAtA[i] = 0x18
	}
	if len(m.NodeID) > 0 {
		i -= len(m.NodeID)
		copy(dAtA[i:], m.NodeID)
		i = encodeVarintWorkload(dAtA, i, uint64(len(m.NodeID)))
		i--
		dAtA[i] = 0x12
	}
	if m.Epoch != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Epoch))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *ManagerWorkload) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ManagerWorkload) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ManagerWorkload) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.UpdateAt != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.UpdateAt))
		i--
		dAtA[i] = 0x30
	}
	if m.CreateAt != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.CreateAt))
		i--
		dAtA[i] = 0x28
	}
	if m.Score != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Score))
		i--
		dAtA[i] = 0x20
	}
	if m.ReportedNodesCount != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.ReportedNodesCount))
		i--
		dAtA[i] = 0x18
	}
	if len(m.ManagerAccount) > 0 {
		i -= len(m.ManagerAccount)
		copy(dAtA[i:], m.ManagerAccount)
		i = encodeVarintWorkload(dAtA, i, uint64(len(m.ManagerAccount)))
		i--
		dAtA[i] = 0x12
	}
	if m.Epoch != 0 {
		i = encodeVarintWorkload(dAtA, i, uint64(m.Epoch))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintWorkload(dAtA []byte, offset int, v uint64) int {
	offset -= sovWorkload(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *NodeWorkload) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Epoch != 0 {
		n += 1 + sovWorkload(uint64(m.Epoch))
	}
	l = len(m.NodeID)
	if l > 0 {
		n += 1 + l + sovWorkload(uint64(l))
	}
	if m.Score != 0 {
		n += 1 + sovWorkload(uint64(m.Score))
	}
	if m.CreateAt != 0 {
		n += 1 + sovWorkload(uint64(m.CreateAt))
	}
	return n
}

func (m *ManagerWorkload) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Epoch != 0 {
		n += 1 + sovWorkload(uint64(m.Epoch))
	}
	l = len(m.ManagerAccount)
	if l > 0 {
		n += 1 + l + sovWorkload(uint64(l))
	}
	if m.ReportedNodesCount != 0 {
		n += 1 + sovWorkload(uint64(m.ReportedNodesCount))
	}
	if m.Score != 0 {
		n += 1 + sovWorkload(uint64(m.Score))
	}
	if m.CreateAt != 0 {
		n += 1 + sovWorkload(uint64(m.CreateAt))
	}
	if m.UpdateAt != 0 {
		n += 1 + sovWorkload(uint64(m.UpdateAt))
	}
	return n
}

func sovWorkload(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozWorkload(x uint64) (n int) {
	return sovWorkload(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NodeWorkload) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWorkload
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NodeWorkload: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NodeWorkload: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Epoch", wireType)
			}
			m.Epoch = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Epoch |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NodeID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWorkload
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWorkload
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NodeID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Score", wireType)
			}
			m.Score = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Score |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreateAt", wireType)
			}
			m.CreateAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreateAt |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipWorkload(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthWorkload
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ManagerWorkload) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWorkload
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ManagerWorkload: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ManagerWorkload: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Epoch", wireType)
			}
			m.Epoch = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Epoch |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ManagerAccount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWorkload
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWorkload
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ManagerAccount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReportedNodesCount", wireType)
			}
			m.ReportedNodesCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReportedNodesCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Score", wireType)
			}
			m.Score = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Score |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreateAt", wireType)
			}
			m.CreateAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreateAt |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UpdateAt", wireType)
			}
			m.UpdateAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UpdateAt |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipWorkload(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthWorkload
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipWorkload(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowWorkload
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWorkload
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthWorkload
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupWorkload
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthWorkload
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthWorkload        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowWorkload          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupWorkload = fmt.Errorf("proto: unexpected end of group")
)
